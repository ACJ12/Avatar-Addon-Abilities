HIDE
execute @s[tag=water,scores={moveslot1=13} ~ ~ ~ function moves/water/water_manipulation
execute @s[scores={moveslot1=0,cooldown1=100}]
scoreboard players set @s cooldown1 0
