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
        </SelectModel>
        <ButtonCrop />
        <Preview />
        <ButtonDownload />
    </Container>
</template>