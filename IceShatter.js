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

        // Play animation and sound
        player.playAnimation("animation.water.pull");
        playSound(player, 'block.ice.place', 1, player.location, 2);

        // Create a wall of ice around the player
        player.runCommand(`fill ~-2 ~ ~-2 ~2 ~2 ~2 ice 0 replace air`);

        // Delayed function to shatter the ice after 1 second
        delayedFunc(player, () => {
            // Play breaking glass sound with a range of 30
            playSound(player, 'block.glass.break', 1, player.location, 30);

            // Play custom particle
            player.runCommand(`particle minecraft:cyan_burst ~ ~ ~ 0.1 0.1 0.1 0.1 50 force`);

            // Deal 2 entity attack damage to nearby entities within 10 blocks
            player.runCommand("execute @e[r=10] ~ ~ ~ damage @s entity_attack 2");

            // Clear the ice wall
            player.runCommand(`fill ~-2 ~ ~-2 ~2 ~2 ~2 air 0 replace ice`);
        }, 40); // Adjusted to 40 ticks for better timing (Bedrock Edition might require longer delay)

        // Additional command to clear the ice wall in case delayedFunc doesn't execute
        player.runCommand(`schedule clearIceWall 1t`);

        // Schedule a function to clear the ice wall after 1 second as a fallback
        player.runCommand(`schedule function clearIceWall 1t`);
    }
}

export default command;
