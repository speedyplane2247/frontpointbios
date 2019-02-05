// bios.js | The post-loaded lastOh kernel-mode driver
// starts in higher mode (but not verified until called)
$notif("Kernel Injection","Use $high to attempt access.")
var $high
$high.executeboot("484")
$high.launch = async function(j) {
    var temp = $boot.HOOKSTATUS
    var temp2 = $db.get("/verify.sfk")
    if (temp != temp2) {
        await $alert.info("<b>Exploit Self-Protection</b>\n\nFailed to verify your hook status.\nThis means you either spoofing your status, aren't running in hooked mode, or the exploit has been patched / can't assign code from the modified BIOS.")
        $exe("shutdown")
    } else {
        $boot.launch(j,"483")
    }
}
$high.executebot = async function(j) {
    try {
    $loader.script("/a/bios/boot/catalog.cfg")
    }
    catch {
        await $exe("js /a/bios/boot/catalog.cfg")
        $alert.info("Failed to launch the boot catalog, using fail-safe.")
    }
}