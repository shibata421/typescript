<template>
  <div>
    <h1>Contador (Classe)</h1>
    <h2>{{ valor }}</h2>
    <h3>{{ getParOuImpar() }}</h3>
    <h3>{{ parOuImpar }}</h3>
    <button @click="setValor(-1)">-</button>
    <button @click="setValor(1)">+</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ContadorClasse extends Vue {
    @Prop(Number) public valorInicial?: number
    public valor = this.valorInicial || 0

    public setValor(delta: number) {
        this.valor += delta
    }

    public getParOuImpar(): string {
        return this.valor % 2 === 0 ? 'Par' : 'Impar'
    }

    public get parOuImpar(): string {
        return this.valor % 2 === 0 ? 'Par' : 'Impar'
    }
}
</script>

<style>

</style>