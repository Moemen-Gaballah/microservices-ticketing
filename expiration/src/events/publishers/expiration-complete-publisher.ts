import {ExpirationCompleteEvent, Publisher, Subjects} from "@mgticketing/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;

}