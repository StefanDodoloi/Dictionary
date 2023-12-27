const dictionary = [];

function saveWord() {
  const saveWord = document.getElementById('searchWord').value.toLowerCase();

  if (!dictionary.includes(saveWord)) {
    dictionary.push(saveWord);
    document.getElementById('save').innerText = 'Word saved!';
  } else {
    document.getElementById('save').innerText = 'Word exist!';
  }
  saveWord.value = ' ';
}

function searchWord() {
  const searchText = document.getElementById('searchWord').value.toLowerCase();

  if (dictionary.includes(searchText)) {
    document.getElementById('search').innerText = 'Word found!';
  } else {
    document.getElementById('search').innerText = 'Word not found!';
  }
  searchText.value = ' ';
}