import { MinecraftBlockTypes } from 
from "@minecraft/server";
import { getScore, setScore,
playSound, delayedFunc } from
"../../util.js";

const command = {
    name: 'Surge Wave',
    description: 'Send a Wave of water 
  towards the enemy', 
    style: 'water',
    unlockable: 1,
    unlockable_for_avatar: 1,
    cooldown: 'fast',
    execute(player) {
        // Set cooldown so they 
can't spam 
       setScore(player,
"cooldown", 0);
        // Check if they have 
water 
        if 
(getScore("water_loaded", player)
< 0) return
player.sendMessage("§cYou don't 
have enough water to do that!")
        setScore.(player,
"water_loaded", 1, true);

        // Start 

player.addTag("waterWave");

player.playAnimation("animation.water.push");

player.runCommandrunCommandAsync("camerashake add @a [r=5] 0.4 0.1 directional");
        playSound(block,'water.splash', 1, player.location, 2);

        const dimension =
player.dimension;

        // Wave formation 
        delayedFunc (player,
(surgeWave) => { 
           const entities = 
[...dimension.getEntitie({location: player.location,
maxDistance: 4, excludeNames: [player.name],
excludeTypes: ["item"],
excludeFamilies: ["inanimate"],
excludeTags: 
["bending_dmg_off"] })];

entities.forEach(entity => {

player.runCommand('summon armor_stand surge');
player.runCommand('execute at @s[tag=waterWave] run tp @e[name=surge] @s[tag=waterWave] ^ ^1 ^2');

player.runCommand('execute at @s[tag=waterWave] run effect @e[name=surge] invisibility 9999 1 true');

player.runCommand('execute at @e[name=surge] run setblock water ^ ^-1 ^2');
player.runCommand('execute at @e[name=surge] run setblock water ^ ^ ^2');
player.runCommand('execute at @e[name=surge] run summon armor_stand s2');
player.runCommand('execute at @e[name=surge] run tp @e[name=s2] @e[name=surge] ^ ^1 ^2');
player.runCommand('execute at @e[name=s2] run damage @e[tag=!waterWave,r=2] entity_attack 2');

player.runCommand('execute at @e[name=s2] run setblock air ^ ^ ^');
player.runCommand('execute at @e[name=s2] run setblock air ^ ^1 ^');
player.runCommand('execute at @e[name=s2] run tp @e[name=surge] ^ ^-1000 ^');
player.runCommand('execute at @e[name=s2] run kill @e[type=armor_stand,name=surge]');
player.runCommand('execute at @e[name=s2] run setblock water ^ ^-1 ^1');
player.runCommand('execute at @e[name=s2] run setblock water ^ ^1 ^1');
}
