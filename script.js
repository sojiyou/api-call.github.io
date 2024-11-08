async function fetchData(){
   document.addEventListener("DOMContentLoaded", () => {
      const oldTestament = document.getElementById("old-testament");
      const newTestament = document.getElementById("new-testament");

      oldTestament.addEventListener("change", () => {
         newTestement.selectedIndex = 0;
      });
      newTestament.addEventListener("change", () => {
         oldTestament.selectedIndex = 0;
      });
   })


      try {
         const response = await fetch('https://bible-api.com/john 3:16?translation=kjv');
         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }
         const data = await response.json();
         const verseData = data.verses[0];

         const bibleBook = verseData.book_name;
         const bibleChapter = verseData.chapter;
         const bibleVerse = verseData.verse;
         const bibleText = verseData.text;

         console.log(bibleBook);
         console.log(bibleChapter);
         console.log(bibleVerse);
         console.log(bibleText);
      } catch (error) {
         console.error('Error:', error);
      }
}

fetchData();



