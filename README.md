Folder OurGroup:

Zadanie 1
1. Stwórz publiczne repozytorium na Githubie, dodaj wszystkie osoby ze swojej grupy jako collaborators {grupy 3 lub 2-osobowe}
2. Na kanale #grupy dodaj info o swojej grupie w formatce: [nazwa] @osoba1 @osoba2 @osoba3 [link do repo]
3. W stworzonym repo zrób prostą stronkę o swojej grupie:
    - niech index.html zawiera znaczniki takie jak: html, head (title, utf-8), body, nav (a w nim np. menu strony w formie table - ul, li), article - np. krótki opis waszej grupy, section (niech zawiera form, dzięki któremu osoby mogą dołączyć do waszego klubu - imię, nazwisko, data urodzenia, płeć, wybór koloru.. i submit), footer, img, a, h1-h5, p, button
    - dodaj plik style.css - coś prostego, aby strona nie była taka brzydka i sztywna - jakieś marginesy, zmiana fonta, dopasowanie wielkości obrazka, ostylowanie menu
    - do pliku index.html dodaj prosty javascript - walidacja formularza np. kontrola daty urodzenia, oraz aby po kliknięciu submit w formie pojawiał się dymek z informacją o sukcesie lub niepowodzeniu
4. Prosimy o workflow githubowy tj.:
    - @osoba1 robi htmla - robi branch, potem commituje i pushuje na githuba
    - @osoba2 (i @osoba3) - robią branche, pullują repo, jedna osoba dodaje css, druga - javascript; (możecie podzielić się inaczej) i wiadomo commity, pushe
    - @osoba1 merguje wszystko na githubie


Folder Unsplash:

Projekt III – UNSPLASH (30 pkt)

Napisz aplikację, która będzie korzystała z API serwisu https://unsplash.com/ (API jest dostępne pod adresem: https://unsplash.com/developers). Aplikacja ma pobierać i wyświetlać zdjęcia pobrane z tego serwisu.

Pod ocenę będą brane następujące elementy:
1.    (1 pkt) Skompilowanie oraz uruchomienie projektu
2.    (17 pkt) Uwzględnienie wymagań z uwzględnieniem sytuacji wyjątkowych:
    >    (1 pkt) Na początku aplikacja powinna pobrać z serwisu 10 losowo wybranych zdjęć z możliwością przewijania dalej
    >    (1 pkt) Aplikacja powinna mieć możliwość ustawienia ile zdjęć losowych chcemy pobrać na stronę główną 
    >    (1 pkt) Aplikacja powinna mieć możliwość ustawienie jakie zdjęcia (wyszukane po słowie kluczowym) chcemy pobrać na stronę główną
    >    (1 pkt) Aplikacja dla każdego pobranego zdjęcia powinna wyświetlać po najechaniu na to zdjęcie autora tego zdjęcia
    >    (1 pkt) Aplikacja powinna wyświetlać zdjęcia wraz z możliwością sortowania pól (na przykład po dacie utworzenia zdjęcia)
    >    (2 pkt) Aplikacja powinna mieć możliwość polubienia / odlubienia (chodzi o np. zmienianie koloru łapki)
    >    (2 pkt) Aplikacja powinna mieć możliwość wyświetlenia polubionych zdjęć danego użytkownika
    >    (2 pkt) Aplikacja powinna mieć możliwość wyświetlenia wstawionych zdjęć danego użytkownika
    >    (2 pkt) Aplikacja powinna mieć możliwość wyświetlenia statystyk danego użytkownika
    >    (2 pkt) Aplikacja powinna mieć możliwość wyświetlenia kolekcji danego użytkownika 
    >    (2 pkt) Aplikacja powinna posiadać możliwość sporządzania statystyk (w postaci tabeli lub wykresów) uzyskanych danych z API. Im więcej statystyk, tym większa ilość punktów.
3.    (7 pkt) Styl aplikacji 
    >    (2 pkt) Użycie frameworka CSS np. Bootstrap lub czystego CSS
    >    (1 pkt) Funkcjonalne ułożenie elementów aplikacji
    >    (4 pkt) Responsywny design strony
4.    (2 pkt) Walidacja formularzy
5.    (3 pkt) Styl i podział kodu
    >    (1 pkt) Użycie TypeScript
    >    (1 pkt) Sensowny podział na pliki
    >    (1 pkt) Zachowana metodyka DRY

Ponadto pod ocenę jest brane również: 
    >    Historia projektu w repozytorium.
    >    Ocena opisu commitów
    >    Stan repozytorium (żeby nie był śmietnikiem!)