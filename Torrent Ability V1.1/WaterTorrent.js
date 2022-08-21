import { World } from
'mojang-minecraft'
import commands from '../
import.js';
import { getScore } from "./../../
util.js";

const command = {
    name: 'Water Torrent'
    description: 'Create a spinning water around
you and shoot it at your enemy.',
    style: 'water'
    unlockable: 0,
    execute(player) {
        player.addTag("torrent");
        player.runCommand("scoreboard players set @s cooldown1 0");
        player.runCommand("summon armor_stand torrent_spin ^ ^ ^");
        player.runCommand("execute @s[tag=torrent] ~~~ tp @e[name=torrent_spin] ~ ~150 ~10");
        player.runCommand("execute @e[name=torrent_spin] ^^^3 particle a:water_blast ~~-149.5~");
        player.runCommand("execute @e[name=torrent_spin] ~~~ damage @e[tag=!torrent] 2 drowning entity @s[tag=!torrent,r=2]"); 
        player.removeTag("torrent");
        player.addTag("selfshove");
        player.runCommand("scoreboard players set @s cooldown1 0");
        player.runCommand("playsound firework.blast @a[r=3]");
        for (let i = 1; i < 15; i++) {
            try {
	    player.runCommand(`particle a:air_blast ^^1^${i/2}`);
        	    player.runCommand(`execute @s ^^^${i/2} execute @e[r=2,tag=!selfshove] ~~~ tp @s ^^^-0.5 facing @p[tag=selfshove]`);
	} catch (error) {}
        }
        try { player.runCommand(`execute @s ^^^7 damage @e[r=3] ${Math.ceil(Math.min(getScore("level", player)/4, 16))+2} none entity @s`); } catch (error) {}
        player.removeTag("selfshove");
        player.runCommand(`particle a:air_blast_pop ^^1^7.2`);
    }
}

export default command
