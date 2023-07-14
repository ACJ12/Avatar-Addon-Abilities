import { system } from
'@minecraft/server'
import { setScore, getScore,
playSound, checkItemAmount,
delayedFunc } from "./../../
util.js";

const command = {
    name: 'Hydro Therapy',
    description: 'Healing AbilityAbility for Waterbenders.',
    style: 'water',
    unlockable: 1,
    unlockable_for_avatar: 1,
    cooldown: 'fast',
    execute(player) {

        setScore(player,
"cooldown", 0);

        player.runCommand("effect @s 
speed 15 1 true");

        player.runCommand("execute at @s as @s run particle a:water_blast_pop");

        let currentTick = 0;
        const sched_ID =
system.runInterval(function tick()
{          
            currentTick++;
            if (currentTick > 200)
return system.clearRun(sched_ID);
            let left_hand =
player.dimension.runCommand.x:
player.location.x, y:
player.location.y, z:
player.location.z});
            if (feet.isWater())
player.runCommandAsync('effect @s regeneration 15 1');
            if (currentTick > 100)
{

return system.clearRun(sched_ID);

   }
}   
