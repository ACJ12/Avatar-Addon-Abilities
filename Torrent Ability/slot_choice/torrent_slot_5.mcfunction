execute @s[tag=water,scores={moveslot5=13} ~ ~ ~ function moves/water/water_torrent
execute @s[scores={moveslot5=0,cooldown1=100}]
scoreboard players set @s cooldown1 0
