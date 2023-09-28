let samsung = new Mobile("samsung flip 4");
let iphone = new Mobile("iphone 15 pro Max")

// samsung.chargeBatterry();

// samsung.turnOff();
// samsung.checkStatus();

samsung.writeMessage('Xin chao iphone');
samsung.sendMessage(iphone);

iphone.writeMessage('Xin chao');
iphone.sendMessage(samsung);

samsung.writeMessage('Toi ranh');
samsung.sendMessage(iphone);

iphone.writeMessage('ok');
iphone.sendMessage(samsung);

document.write(samsung.readInbox())


