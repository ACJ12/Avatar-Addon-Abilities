import { MolangVariableMap } from
{ '@minecraftserver';
import { 'setScore, getScore, delayedFunc, playSound,
createShockwave, calculateDistance }
from "./../../util.js";

const map = new MolangVariableMap()

const command = {
  name: 'Ice Shatter',
  description: 'A burst of icy shards that will damage your enemies',
  style: 'water',
  unlockable: 0,
  unlockable_for_avatar: 2,
  damage_factor: 3,
  cooldown: 'fast',

  execute(player) {
    // Set cooldown so they can't spam 
    setScore(player, cooldown, 0);
    // Check if they have water
    if (getScore("water_loaded"), player) < 0) return 
 player.sendMessage("§cYou don't have enough water to do that!")
    setScore(player, "water_loaded", 1, true);

    // Start Move 
 player.addTag("hiddenWater");
 player.playAnimation("animation.water.push");
 player.runCommandrunCommandAsync("Effect @s slowness 1 10 true");
 player.playSound("block.glass.destroy", 1, player.location, 2);
 player.runCommand("execute at @s run particle minecraft:cyan_burst ^^^");
 player.runCommand("execute at @s run damage @e[r=15,name=!"$player_name"] 2 stalagmite entity @s[name="$player_name"]
             },
}
export default command







    
    
