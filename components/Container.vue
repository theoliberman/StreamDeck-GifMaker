 <template>
    <div class="row justify--center">
        <div class="flex column md4">
            <slot></slot>
        </div>
    </div>
</template>

<style>
html {
    background-color: #3B3F40;
}

.row {
    margin-bottom: 2rem;
}

.column>* {
    margin-top: 2rem;
    text-align: center;
}
</style>