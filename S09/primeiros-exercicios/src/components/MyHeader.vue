<template>
    <div>
        <div v-show="titulo">
            <p>
                Mostrando componente:
            </p>
            <h1 v-text="titulo"></h1>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MyHeader',
    props: {
        titulo: String,
    }
}
</script>