import { world } from
'mojang_minecraft'
import commands from '../
import.js';
import { getScore } from "./../
util.js";

const command = {
    name: 'Torrent',
    description: 'Create a spinning water around
you that you and shoot at your enemy.',
    style: 'water',
    unlockable: 0,
    execute (player) {
        player.runCommand("run
commands here!");
    }
}

export default command
