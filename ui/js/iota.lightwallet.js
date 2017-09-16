var localInterruptAttachingToTangle = function(callback) {
    console.log("Light Wallet: localInterruptAttachingToTangle");

    libcurl.interrupt();

    if (callback) {
      return callback();
    }
}

libcurl.overrideAttachToTangle(iota.api);
iota.api.interruptAttachingToTangle = localInterruptAttachingToTangle;
