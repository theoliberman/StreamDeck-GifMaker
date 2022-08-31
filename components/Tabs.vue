<script setup>
const tabs = useSlots().default().filter(child => child.type.__name === "Tab")
const active = useState("active", () => tabs[0].props.title)
</script>

<template>
    <i-tabs v-model="active" class="_border _border-radius _border-color:dark" stretch>
        <template #header>
            <i-tab-title v-for="(tab, index) in tabs" :for="tab.props.title">
                {{  tab.props.title  }}
            </i-tab-title>
        </template>
        <slot />
    </i-tabs>
</template>