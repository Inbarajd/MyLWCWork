import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class HelloWorld extends LightningElement {
    @track greetings = "Inbaraj";
    _title = this.greetings &'hello Bla Bla Bla....!!!!!!';

    eventHandle(event){
        this.greetings = event.target.value;
    }
    dispGreetings(event){
        const evt = new ShowToastEvent({
            title: this._title,
            message: 'Hello,{greetings}',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
}