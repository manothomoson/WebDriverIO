<<<<<<< HEAD
ggfor /f "tokens=2-8 delims=.:/ " %%a in ("%date% %time%") do set DateNtime=%%c-%%a-%%b_%%d-%%e-%%f.%%g

XCOPY /E /Q /I /H C:\AutomationWDIO\SuperiorEnergy\allure-report C:\AutomationWDIO\SuperiorEnergy\Reports\%DateNtime%\allure-report
XCOPY /E /Q /I /H C:\AutomationWDIO\SuperiorEnergy\allure-results C:\AutomationWDIO\SuperiorEnergy\Reports\%DateNtime%\allure-results

rem start C:\AutomationWDIO\SuperiorEnergy\allure-report\index.html

start "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files --new-window C:\AutomationWDIO\SuperiorEnergy\allure-report\index.html

=======
ggfor /f "tokens=2-8 delims=.:/ " %%a in ("%date% %time%") do set DateNtime=%%c-%%a-%%b_%%d-%%e-%%f.%%g

XCOPY /E /Q /I /H C:\AutomationWDIO\SuperiorEnergy\allure-report C:\AutomationWDIO\SuperiorEnergy\Reports\%DateNtime%\allure-report
XCOPY /E /Q /I /H C:\AutomationWDIO\SuperiorEnergy\allure-results C:\AutomationWDIO\SuperiorEnergy\Reports\%DateNtime%\allure-results

rem start C:\AutomationWDIO\SuperiorEnergy\allure-report\index.html

start "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files --new-window C:\AutomationWDIO\SuperiorEnergy\allure-report\index.html

>>>>>>> 872742e21a9c018efafae5619e7425a39f754a48
exit