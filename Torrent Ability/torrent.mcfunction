#bridge-file-version: #80

summon armor_stand ^ ^ ^-1 normal_size torrent_spin
tag @s add torrent
scoreboard players set @s cooldown1 0
execute @s ~ ~ ~ tp @e[name=torrent_spin] ~ ~150 ~
execute @e[name=torrent_spin] ^ ^ ^3 particle a:water_blast ~ ~-149.5 ~ 
