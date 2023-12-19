import { system } from '@minecraft/server';
import { setScore, getScore, delayedFunc, playSound } from "./../../util.js";

const command = {
    name: 'Ice Shatter',
    description: 'Creates a wall of ice that shatters after 1 second, dealing damage to nearby entities',
    style: 'water',
    unlockable: 1,
    unlockable_for_avatar: 5,
    cooldown: 'fast',
    execute(player) {
        setScore(player, "cooldown", 0);

        // Check if they have water
		if (getScore("water_loaded", player) < 1) return player.sendMessage("Ā§cYou don't have enough water to do that!")
		setScore(player, "water_loaded", -1, true);


        // Check if the player is in water style
        if (!getScore("water", player)) return player.sendMessage("§cYou must be in water style to use this move.");

        // Play animation and sound
        player.playAnimation("animation.water.freeze");
        playSound(player, 'block.ice.place', 1, player.location, 2);

        // Create a wall of ice around the player
        player.runCommand(`fill ~-2 ~ ~-2 ~2 ~2 ~2 minecraft:ice replace air`);

        // Delayed function to shatter the ice after 1 second
        delayedFunc(player, () => {
            // Play custom particle
            player.runCommand(`particle minecraft:cyan_burst ~ ~ ~ 0.1 0.1 0.1 0.1 50 force`);

            // Deal 2 entity attack damage to nearby entities
            player.runCommand("damage @e[r=5] 2 entity_attack entity @s");

            // Clear the ice wall
            player.runCommand(`fill ~-2 ~ ~-2 ~2 ~2 ~2 minecraft:air replace ice`);
        }, 20); // 20 ticks = 1 second
    }
}

export default command;
