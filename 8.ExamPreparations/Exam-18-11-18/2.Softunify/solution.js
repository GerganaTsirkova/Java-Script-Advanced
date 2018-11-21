const expect = require("chai").expect;

class SoftUniFy {
    constructor() {
        this.allSongs = {};
    }

    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = {rate: 0, votes: 0, songs: []}
        }

        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

        return this;
    }

    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);

            if(songs.length > 0){
                acc[cur] = songs;
            }

            return acc;
        }, {});

        let arr = Object.keys(songArtists);
        let output = "";

        if(arr.length > 0){

            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });

        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }

        return output;
    }

    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

        let output;

        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }

        return output;

    }

    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;

        if (artistExist) {

            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }

            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;

        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }

        return output;
    }
}

//SoftUniFy { allSongs: { Cher: { rate: 0, votes: 0, songs: [Array] } } }

describe("softunify function",function () {
    let softUnify;
    beforeEach(function () {
        softUnify = new SoftUniFy();
    });
    describe("softunify function",function () {
        it('basic class checks', function () {
            expect(softUnify).to.be.an.instanceOf(SoftUniFy);
            expect(softUnify).to.have.property("downloadSong");
            expect(softUnify).to.have.property("playSong");
            expect(softUnify.songsList).to.exist;
            expect(softUnify).to.have.property("rateArtist");
            expect(typeof softUnify.allSongs).to.equals('object');
            expect(Object.keys(softUnify.allSongs).length).to.equals(0);
        });

    });
    describe("softunify function",function () {
        it('check downloadSongs property', function () {
            let result = softUnify.downloadSong('Cher', 'Believe', 'jisdcejkcsdf');
            expect(result.allSongs["Cher"].rate).to.equals(0);
            expect(result.allSongs["Cher"].votes).to.equals(0);
            expect(result.allSongs["Cher"].songs.length).to.equals(1);
            expect(result.allSongs["Cher"].songs[0]).to.equals("Believe - jisdcejkcsdf");
        });
        it('check playSong property', function () {
            expect(softUnify.playSong("MySong")).to.equals(`You have not downloaded a MySong song yet. Use SoftUniFy's function downloadSong() to change that!`)
        });
        it('check songLists() property', function () {
            let result = softUnify.songsList;
            expect(result).to.equals(`Your song list is empty`)
        });
        it('check songLists() property', function () {
            let sofunify = new SoftUniFy();
            expect(sofunify.rateArtist('Eminem')).to.equals('The Eminem is not on your artist list.');
            expect(sofunify.rateArtist('Eminem', 50)).to.equals('The Eminem is not on your artist list.');
        });


    });

});


