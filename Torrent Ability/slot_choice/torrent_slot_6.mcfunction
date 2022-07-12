HIDE
execute @s[tag=water,scores={moveslot6=13} ~ ~ ~ function moves/water/water_torrent
execute @s[scores={moveslot6=0,cooldown1=100}]
scoreboard players set @s cooldown1 0
