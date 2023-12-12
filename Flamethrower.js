import { system } from '@minecraft/server';
import { setScore, getScore, delayedFunc, playSound } from "./../../util.js";

const command = {
    name: 'Flamethrower',
    description: 'Emits a flame in the direction the player is looking, damaging nearby entities.',
    style: 'fire',
    execute(player) {
        setScore(player, "cooldown", 0);
        const range = 8;
        const damage = 1;
        const runtime = 10;

        player.playAnimation("animation.fire.blast");
        playSound(player, 'item.flintandsteel.use', 1, player.location, 2);
        player.runCommand(`execute at @e[type=!item,family=!inanimate,name=!"${player.name}",r=${range}] run particle flame ~ ~ ~ 0 0 0 0.1 100 force`);
        player.runCommand("inputpermission set @s movement disabled");
        player.runCommand(`execute as @e[type=!item,family=!inanimate,name=!"${player.name}",r=${range}] at @s run tp @s ~ ~ ~ 0 0`);
        player.runCommand(`damage @e[distance=..1,r=${range}] ${damage} entity_attack entity @s`);
        delayedFunc(player, () => {
            player.runCommand("inputpermission set @s movement default");
        }, runtime * 20);
    },
};

export default command
