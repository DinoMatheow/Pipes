import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, AsyncPipe } from '@angular/common';
import { Observable, interval, map, tap } from 'rxjs';

const client1 = {
  name: 'ibai',
  age: 20,
  gender: 'male',
  address: 'Calle 123',
}

const client2 = {
  name: 'midu',
  age: 29,
  gender: 'female',
  address: 'Calle 123',
}
@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPageComponent {

client = signal(client1);

invitationMap = {
  'male': 'invitarlo',
  'female': 'invitarla',
}


changeClient() {
  if (this.client() === client1) {
  this.client.set(client2)
  return;
  }
  this.client.set(client1)
}

deleteClient() {
  this.clients.update((prev) => prev.slice(1));
}

profile = {
  name: 'ibai',
  age: 30,
  gender: 'male',
  address: 'Tokio, japon',
}


promiseValue: Promise<string> = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('Tenemos data en la promesa');
    console.log('Tenemos data en la promesa');
  }, 3500);
});

myObservable = interval(2000).pipe(
  map(value => value + 1),
  tap(value => console.log('tap', value))
);



clientsMap = signal({
  '=0': 'no tenemos ningun cliente esperando',
  '=1': 'tenemos un cliente esperando',
  'other': 'tenemos # clientes esperando',
})


clients = signal([
  'mario',
  'luigi',
  'yoshi',
  'peach',
  'bowser',
  'toad',
  'toadette',
]);


}

