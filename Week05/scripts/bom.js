const chapterForm = document.querySelector('#chapter-form');
const chapterInput = document.querySelector('#favchap');
const chapterList = document.querySelector('#list');
const feedback = document.querySelector('#feedback');

const bookNames = [
    '1 Nephi',
    '2 Nephi',
    'Jacob',
    'Enos',
    'Jarom',
    'Omni',
    'Words of Mormon',
    'Mosiah',
    'Alma',
    'Helaman',
    '3 Nephi',
    '4 Nephi',
    'Mormon',
    'Ether',
    'Moroni'
];

const booksByNormalizedName = new Map(
    bookNames.map((book) => [book.toLowerCase(), book])
);

function showFeedback(message) {
    feedback.textContent = message;
}

function parseChapter(value) {
    const match = value.trim().replace(/\s+/g, ' ').match(/^(.+?)\s+(\d+)$/);

    if (!match) {
        return null;
    }

    const book = booksByNormalizedName.get(match[1].toLowerCase());
    const chapterNumber = Number(match[2]);

    if (!book || !Number.isSafeInteger(chapterNumber) || chapterNumber < 1) {
        return null;
    }

    return {
        book,
        chapterNumber,
        label: `${book} ${chapterNumber}`,
        key: `${book.toLowerCase()}-${chapterNumber}`
    };
}

chapterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const chapter = parseChapter(chapterInput.value);

    if (!chapter) {
        showFeedback('Enter a Book of Mormon book and a positive chapter number, such as Alma 5.');
        chapterInput.focus();
        return;
    }

    if ([...chapterList.children].some((item) => item.dataset.chapterKey === chapter.key)) {
        showFeedback(`${chapter.label} is already in your list.`);
        chapterInput.focus();
        return;
    }

    if (chapterList.children.length >= 10) {
        showFeedback('Your Top 10 list is full. Remove a chapter before adding another.');
        chapterInput.focus();
        return;
    }

    const item = document.createElement('li');
    item.dataset.chapterKey = chapter.key;

    const chapterName = document.createElement('span');
    chapterName.textContent = chapter.label;

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'delete';
    removeButton.textContent = '×';
    removeButton.setAttribute('aria-label', `Remove ${chapter.label}`);
    removeButton.addEventListener('click', () => {
        item.remove();
        showFeedback(`${chapter.label} removed from your list.`);
        chapterInput.focus();
    });

    item.append(chapterName, removeButton);
    chapterList.append(item);

    showFeedback(`${chapter.label} added to your list. ${chapterList.children.length} of 10 chapters.`);
    chapterInput.value = '';
    chapterInput.focus();
});
