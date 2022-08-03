HIDE
execute @s[tag=water,scores={moveslot1=13} ~ ~ ~ function moves/water/manip
execute @s[scores={moveslot1=0,cooldown1=100}]
scoreboard players set @s cooldown1 0
