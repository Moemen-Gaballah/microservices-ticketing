import nats from 'node-nats-streaming';
import {TickeetCreatedPublisher} from "./events/tickeet-created-publisher";


const stan = nats.connect('ticketing', 'abc', {
    url: 'http://localhost:4222',
});

stan.on('connect', async () => {
    console.log('Publisher connected to NATS');

    const publisher = new TickeetCreatedPublisher(stan);
    try {
        await publisher.publish({
            id: "123",
            title: 'concert',
            price: 20
        });
    } catch (err) {
        console.log(err);
    }


    // const data = JSON.stringify({
    //     id: "123",
    //     title: 'concert',
    //     price: 20
    // });
    //
    // stan.publish('ticket:created', data, () => {
    //     console.log('Event published');
    // });


});