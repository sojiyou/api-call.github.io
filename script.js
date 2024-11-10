async function fetchData(b, t, c, v){
   book = b;   
   translation = t; 
   chapter = c; 
   verse = v;
   let book_result = document.getElementById("book-result");
   let translation_result = document.getElementById("translation-result");
   let chapter_result = document.getElementById("chapter-result");
   let verse_result = document.getElementById("verse-result");
   let text_result = document.getElementById("text-result");
   let h4 = document.getElementById("separator");
   if(!book || !translation || !chapter || !verse){
      text_result.textContent = "Please fill up all the fields.";
      return;
   }
   if(chapter < 1 || chapter > 150 || verse < 1 || verse > 176){
      text_result.textContent = "Invalid chapter or verse number.";
      return;
   }


// ----------------------------------------------------------------------------------------------//
   const url = `https://bible-api.com/${book}${chapter}:${verse}?translation=${translation}`;

      try {
         const response = await fetch(url);
         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }
         const data = await response.json();
         const verseData = data.verses[0];

         const bibleBook = verseData.book_name;
         const bibleChapter = verseData.chapter;
         const bibleVerse = verseData.verse;
         const bibleText = verseData.text;

         book_result.textContent = bibleBook;
         translation_result.textContent = translation;
         chapter_result.textContent = bibleChapter;
         verse_result.textContent = bibleVerse;
         text_result.textContent = bibleText;
         h4.style.display = "flex";

      } catch (error) {
         console.log("Error: " + error.message);
      }

} // end of async fetchData() function

document.addEventListener("DOMContentLoaded", () => {
   const oldTestament = document.getElementById("old-testament");
   const newTestament = document.getElementById("new-testament");

   oldTestament.addEventListener("change", () => {
      newTestament.selectedIndex = 0;
   });
   newTestament.addEventListener("change", () => {
      oldTestament.selectedIndex = 0;
   });
}); //end of DOMContent

/**
 *  *--- Start of the Script ---*
 */
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
   event.preventDefault();

   const chapter = document.getElementById("chapter-input").value;
   const verse = document.getElementById("verse-input").value;
   let book = null;
   const oldTestament = document.getElementById("old-testament");
   const newTestament = document.getElementById("new-testament");
   const translate = document.getElementById("translation");
   const translation = translate.options[translate.selectedIndex].value;

   if(oldTestament.selectedIndex > 0){
      book = oldTestament.options[oldTestament.selectedIndex].text;
   }else if (newTestament.selectedIndex > 0){
      book = newTestament.options[newTestament.selectedIndex].text;
   }
   
      fetchData(book, translation, chapter,verse);
});




