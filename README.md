# Playwright1
Playwright to framework do testowania, który umożliwia automatyzację przeglądarek Chromium, Firefox i WebKit za pomocą jednego API. Możesz go wykorzystać do pisania testów end-to-end (E2E). Oto kilka kluczowych cech Playwright:

Wsparcie dla wielu przeglądarek:
- Playwright obsługuje wszystkie nowoczesne silniki renderujące, w tym Chromium, WebKit i Firefox.
- Można testować na systemach Windows, Linux i macOS, lokalnie lub na CI, zarówno w trybie headless, jak i headed.
- API Playwright można używać w TypeScript, JavaScript, Pythonie, .NET i Java.
Emulacja mobilnych stron internetowych:
Playwright umożliwia emulację natywną dla Google Chrome na Androida oraz Mobile Safari.
Ten sam silnik renderujący działa na Twoim komputerze i w chmurze.
- Niezawodność i brak testów zawodnych:
- Auto-wait: Playwright oczekuje, aż elementy staną się aktywne przed wykonaniem akcji. To eliminuje potrzebę stosowania sztucznych opóźnień, które często prowadzą do zawodnych testów.
- Asertycje dostosowane do webu: Asertycje w Playwright są tworzone specjalnie dla dynamicznych stron internetowych. Sprawdzanie jest automatycznie powtarzane, aż zostaną spełnione wymagane warunki.
- Śledzenie: Skonfiguruj strategię ponawiania testów, przechwytuj ślady wykonania, nagrywaj filmy i zrzuty ekranu, aby wyeliminować błędy.
Pełna izolacja i szybkie wykonywanie:
- Playwright tworzy kontekst przeglądarki dla każdego testu. Kontekst przeglądarki jest równoważny nowemu profilowi przeglądarki.

Potężne narzędzia:
- Codegen: Generuj testy, rejestrując swoje działania. Zapisz je w dowolnym języku.
- Playwright Inspector: Inspekcja strony, generowanie selektorów, śledzenie wykonywania testu, eksploracja logów wykonania.
- Trace Viewer: Przechwytuj wszystkie informacje do badania błędów testu.

Celem testowania e2e przez VSC zapisanie w java-script była witryna phptravels.net
Wstępnie założyłem repository jako testowe dla e2e testu
Aby uruchomić środowisko testowe trzeba zainstalować:
1) Visual Studio Code
2) node.js
3) marketplace Playwright

Konfiguracja
npm --install playwright

Test ete https://phptravels.net
a) wejście na stronę
b) wybranie miasta startu z listy
c) wybranie miasta docelowego
d) kliknięcie w pole wyszukaj
e) wybranie hotelu z pozycji nr 1
