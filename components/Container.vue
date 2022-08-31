<template>
    <i-container>
        <i-row center>
            <i-column xs="8" class="o">
                <slot></slot>
            </i-column>
        </i-row>
    </i-container>
</template>

<style>
.column {
    margin-bottom: var(--spacing);
}

.column>* {
    margin-top: var(--spacing) !important;
}
</style>