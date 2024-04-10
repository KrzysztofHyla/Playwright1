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
# Tests e2e & UI
Celem testowania e2e przez VSC zapisanie w type-script była witryna phptravels.net
Wstępnie założyłem repository jako testowe dla e2e testu
Aby uruchomić środowisko testowe trzeba zainstalować:
1) Visual Studio Code
2) node.js
3) przez marketplace Playwright Code

Konfiguracja
npm --install playwright

Test ete https://phptravels.net
a) wejście na stronę
b) wybranie miasta startu z listy
c) wybranie miasta docelowego
d) kliknięcie w pole wyszukaj
e) wybranie hotelu z pozycji nr 1

Test UI **npx playwrigt test --ui**
Watch mode which will re-run the test when you make changes to it. You can watch a number of tests at the same time be clicking the eye icon next to each one or all tests by clicking the eye icon at the top of the sidebar. If you are using VS Code then you can easily open your test by clicking on the file icon next to the eye icon. This will open your test in VS Code right at the line of code that you clicked on.

# Docker & GitHub Codespaces
For Docker and GitHub Codespaces environments, you can run UI mode in the browser. In order for an endpoint to be accessible outside of the container, it needs to be bound to the 0.0.0.0 interface:

npx playwright test --ui-host=0.0.0.0

In the case of GitHub Codespaces, the port gets forwarded automatically, so you can open UI mode in the browser by clicking on the link in the terminal.
