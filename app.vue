<template>
    <Container>
        <Gif />
        <Tabs>
            <Tab title="Random GIF">
                <GetGifRandom />
            </Tab>
            <Tab title="From URL">
                <GetGifUrl />
            </Tab>
            <Tab title="From File">
                <GetGifFile />
            </Tab>
        </Tabs>
        <SelectModel>
            <ButtonCrop />
        </SelectModel>
        <Preview />
        <ButtonDownload />
    </Container>
</template>

<style>
:root {
    ----opacity--disabled: 0.5;
}
</style>