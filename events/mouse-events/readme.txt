auxclick – uruchamia się, gdy kliknięto (wciśnięto i zwolniono) na elemencie jakikolwiek przycisk myszy wyłączając główny przycisk (przeważnie wyłączając lewy przycisk u osób praworęcznych)
// Zastosowanie: programowanie dodatkowych przycisków na jakies akcje


click – uruchamia się gdy kliknięto (wciśnięto i zwolniono) na elemencie główny przycisk (przeważnie lewy przycisk u osób praworęcznych)
// Zastosowania: uruchamianie elementów, analityka itp.

contextmenu – uruchamia się, gdy kliknięto (wciśnięto i zwolniono) na elemencie dodatkowy przycisk wywołujący menu kontekstowe (przeważnie prawy przycisk u osób praworęcznych)
// Zastosowania: można zablokować docelowe menu i umieścić pod prawym przyciskiem menu contextowe z ofertami

dblclick – uruchamia się, gdy podwójnie kliknięto (wciśnięto i zwolniono) na elemencie główny przycisk (przeważnie lewy przycisk u osób praworęcznych)
// Zastosowania: szybkie zaznaczanie elementów, być może w jakich szczególnych przypadkach do usuwania, w grach jako super atak

mousedown – uruchamia się, gdy wciśnięto na elemencie główny przycisk (przeważnie lewy przycisk u osób praworęcznych)
// Zastosowanie: inicjowanie przeciągania elementu z jednego miejsca na drugie, rysowanie - kliknięcie i trzymanie przycisku sprawia, że rysujemy

mouseenter – uruchamia się, gdy wskaźnikiem myszy najechano na element, do którego została przypięta funkcja obsługująca to zdarzenie
// Zastosowanie: podświetlanie elementów na stronie internetowej, wyświetlanie tooltipów, aktywacja animacji, odsłonienie tekstu (podmiana tekstu), gdy tylko najedzie się na element

mouseleave – uruchamia się, gdy wskaźnikiem myszy zjechano z elementu, do którego została przypięta funkcja obsługująca to zdarzenie
// Zastosowanie: zakończenie podświetlania elementów interface, zakonczenie aniimacji, zamykanie menu rozwijanego, może przywracać wygląd do pietwontego stylu, efekt wygaszania, postać może przestać się ruszać jeśli musz opuści  obszar gry (można wybbierać obszary, w których mysz nie działa), zakończenie przeciągania

mousemove – uruchamia się, gdy wskaźnikiem myszy jeździmy po elemencie, do którego została przypięta funkcja obsługująca to zdarzenie. Zdarzenie to uruchamia się ciągle, dopóki kursor jest na tym elemencie
// Zastosowanie: śledzenie pozycji myszy, tworzenie efektów paralaksy, można uzyć do rysowania, tworzenie elementów, które podążają za kursorem podświetlanie elementów w zależności od miejsca znajdowania się myszy, sterowanie obiektami w grze, obsługa przeciągania elementów, śledzenie aktywności użytkownika, warto opymalizować za pomocą requestAnimationFrame oraz debounce lub throttle, aby ograniczyć częstotliwość

mouseover – uruchamia się, gdy wskaźnikiem myszy najechano na element, do którego została przypięta funkcja obsługująca to zdarzenie lub na jego element potmony
// Zastosowanie: podświetlanie elementów intefejsu, wyświetlanie tooltipów, do wyświetlania większego podglądu obrazu (można połączyć z mausemove, aby powieksząło ten element obrazka, na którym nam zależy), może służyć do rozwijania menu po najechaniu, dynamiczna identyfikacja elementu

mouseout – uruchamia się, gdy wskaźnikiem myszy zjechano z elementu, do którego została przypięta funkcja obsługująca to zdarzenie lub z jego elementu potomnego
// Zastosowanie: cofanie efektów wizualnych, resetowanie  interakcji w grach, tworzenie animacji wyjścia, obsługa zagnieżdżonych elementów, delegacja zdarzeń, można tworzyć płynne efekty przejścia między elementami

mouseup – uruchamia się, gdy zwolniono na elemencie główny przycisk (przeważnie lewy przycisk u osób praworęcznych)
// Zastosowanie: zakończenie przeciągania elementów drag-and-drop, zatrzymanie rysowania, tworzenie interakcji w grach, tworzenie gestów myszy np: mouseup w połączeniu z mousedown i mousemove; łączenie z zdarzeniami z klawiatury, dobre praktyki: parowanie z mausedown, unikać cięzkich obliczeń, obsługa wielu przycisków na raz 

wheel – uruchamia się, gdy przekręcono okrągły przycisk będąc wskaźnikiem myszy na elemencie (przycisk do scroll’owania)
// Zastosowanie: implementowanie niestandardowych sposobów przewijania, np poziome, zoomowanie elementów np w mapach, w grach zmiana zoomu, do wyświetlania elementów 3D, Optymalizacja z requestAnimationFrame, Debounce/Throttle dla wydajności


// Zdarzenia propagujące się (bąbelkowanie)
Propagują się w górę hierarchii DOM, co oznacza, że po uruchomieniu na elemencie potomnym są wywoływane również na jego rodzicach, aż do korzenia.

// Propagacja zdarzeń w DOM działa w dwóch fazach:
Capture (faza przechwytywania): Zdarzenie przechodzi od korzenia DOM w dół do docelowego elementu.
Bubble (faza bąbelkowania): Zdarzenie wraca od docelowego elementu w górę hierarchii DOM.
!!! Aby wyłączyć bąbelkowanie zdarzeń w JavaScript, możesz użyć metody stopPropagation()

click // Bąbelkuje. Możesz go przechwycić na dowolnym rodzicu, np. document.body.
dblclick // Bąbelkuje. Działa podobnie jak click, ale wymaga dwóch kliknięć.
mousedown // Bąbelkuje. Możesz obsłużyć kliknięcie na rodzicu zamiast na poszczególnych elementach.
mouseup // Bąbelkuje. Możesz przechwycić zakończenie akcji myszy na rodzicu.
mouseover // Bąbelkuje. Wywoływane także podczas przejścia nad elementami potomnymi.
mouseout // Bąbelkuje. Wywoływane przy przejściu z elementu do potomka lub z potomka do rodzica.
wheel // Bąbelkuje. Może być przechwycone na dowolnym poziomie DOM.

// Zdarzenia nie propagujące się (nie bąbelkują)
Nie bąbelkują, co oznacza, że są wywoływane tylko na elemencie docelowym, bez przenoszenia się w górę DOM.

mouseenter // Nie bąbelkuje. Wywoływane tylko raz przy wejściu kursora na element (bez względu na jego dzieci).
mouseleave // Nie bąbelkuje. Wywoływane tylko raz przy opuszczeniu kursora z elementu (bez względu na jego dzieci).


// URZĄDZENIA DOTYKOWE 

stopPropagation() // Zatrzymuje propagację zdarzenia w górę drzewa DOM.
preventDefault() // Zapobiega domyślnemu zachowaniu, np. przewijaniu lub zoomowaniu.
stopImmediatePropagation() // Zatrzymuje propagację i uniemożliwia wywołanie innych handlerów dla tego samego zdarzenia.
touches // Wszystkie aktywne punkty dotyku na ekranie.
targetTouches // Punkty dotyku związane z elementem, na którym wywołano zdarzenie.
changedTouches // Punkty dotyku, które zmieniły stan (np. zostały podniesione).

touchstart // Wywoływane, gdy użytkownik dotyka ekranu.
touchmove // Wywoływane, gdy użytkownik przesuwa palcem po ekranie.
touchend // Wywoływane, gdy użytkownik podnosi palec z ekranu.
touchcancel // Wywoływane, gdy dotyk zostaje przerwany (np. połączenie telefoniczne).
pointerdown // Uniwersalne zdarzenie wskazujące naciśnięcie ekranu, myszki lub rysika.
pointermove // Uniwersalne zdarzenie dla przesuwania palca, myszy lub rysika.
pointerup // Uniwersalne zdarzenie wskazujące zakończenie kontaktu z ekranem.
pointercancel // Uniwersalne zdarzenie dla przerwania kontaktu z ekranem.
gesturestart // Rozpoczęcie gestu wielodotykowego (np. pinch-to-zoom).
gesturechange // Zmiana w gestach wielodotykowych (np. powiększanie, obracanie).
gestureend // Zakończenie gestu wielodotykowego.
