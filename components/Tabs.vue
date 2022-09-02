<script setup>
const tabs = useSlots().default().filter(child => child.type.__name === "Tab")
const active = useActive()
active.value = tabs[0].props.title
</script>

<template>
    <va-tabs v-model="active" grow center>
        <template #tabs>
            <va-tab v-for="tab in tabs" :key="tab.props.title" :name="tab.props.title">
                {{ tab.props.title }}
            </va-tab>
        </template>
    </va-tabs>
    <slot />
</template>