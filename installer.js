// installer.js
// Installs the neccisary functions (outside of the kernel loader)
$db.set('/boot/verify.js','$db.set("/verify.sfk","$boot.HOOKSTATUS")')
$alert.info("Installed HookVerify | You can safely restart in Hooked mode.")
