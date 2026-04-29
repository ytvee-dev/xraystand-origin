class AudioPlayer {
    private static currentAudio: HTMLAudioElement | null;

    static playAudio(src: string): Promise<void> {
        if (this.currentAudio) {
            this.stopAudio();
        }

        const audio = new Audio(src);

        this.currentAudio = audio;

        return audio.play();
    }

    static stopAudio(): void {
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
            this.currentAudio = null;
        }
    }
}

export default AudioPlayer;
