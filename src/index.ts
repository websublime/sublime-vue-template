import { defineCustomElement } from 'vue';
import BaseCounter from './counter.ce.vue';

export const BaseCounterComponent = defineCustomElement(BaseCounter);

customElements.define('my-counter', BaseCounterComponent);
