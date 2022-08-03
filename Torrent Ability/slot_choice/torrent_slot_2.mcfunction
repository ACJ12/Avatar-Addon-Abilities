HIDE
execute @s[tag=water,scores={moveslot2=13} ~ ~ ~ function moves/water/torrent
execute @s[scores={moveslot2=0,cooldown1=100}]
scoreboard players set @s cooldown1 0
