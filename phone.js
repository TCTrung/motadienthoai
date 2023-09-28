class Mobile {
    status;
    batterry;
    message;
    inbox;
    outbox;
    name;

    constructor(name) {
        this.status = true;
        this.batterry = 90;
        this.message ="";
        this.inbox = [];
        this.outbox =[];
        this.name = name;
    }

    checkStatus() {
        if(this.status) {
            document.write('Dien thoai dang bat')
        }else {
            document.write('Dien thoai dang tat')
        }

    }

    turnOn() {
        this.status = true;

    }

    turnOff() {
        this.status = false;

    }

    chargeBatterry() {
        let x = setInterval(() => {
            if (this.batterry >= 100) {
                document.write("Batterry Is Full")
                clearInterval(x);
                return;
            }
            ++this.batterry;
            document.write('Batterry charging ' + this.batterry + '<br>')
        },1000)

    }

    writeMessage(text) {
    this.message = text;

    }

    sendMessage(phone) {
        phone.inbox.push(this.message);
        this.outbox.push(this.message);
    }

    readInbox() {
        return this.inbox;


    }

    readOutbox() {
        return this.inbox;


    }

    decreaseBatterry() {
        this.batterry--;

    }

}