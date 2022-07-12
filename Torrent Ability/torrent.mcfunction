#bridge-file-version: #80
HIDE
summon armor_stand ^ ^ ^-1 normal_size torrent_spin
tag @s add torrent
scoreboard players set @s cooldown1 0
execute @s ~ ~ ~ tp @e[name=torrent_spin] ~ ~150 ~
execute @e[name=torrent_spin] ^ ^ ^3 particle a:water_blast ~ ~-149.5 ~ 
tag @s remove torrent
tag @s add self shove
particle a:water_blast ^ ^1 ^1
particle a:water_blast ^ ^1 ^1.2
particle a:water_blast ^ ^1 ^1.4
particle a:water_blast ^ ^1 ^1.6
particle a:water_blast ^ ^1 ^1.8
particle a:water_blast ^ ^1 ^2
particle a:water_blast ^ ^1 ^2.2
particle a:water_blast ^ ^1 ^2.4
particle a:water_blast ^ ^1 ^2.6
particle a:water_blast ^ ^1 ^2.8
particle a:water_blast ^ ^1 ^3
particle a:water_blast ^ ^1 ^3.2
particle a:water_blast ^ ^1 ^3.4
particle a:water_blast ^ ^1 ^3.6
particle a:water_blast ^ ^1 ^3.8
particle a:water_blast ^ ^1 ^4
particle a:water_blast ^ ^1 ^4.2
particle a:water_blast ^ ^1 ^4.4
particle a:water_blast ^ ^1 ^4.6
particle a:water_blast ^ ^1 ^4.8
particle a:water_blast ^ ^1 ^5
particle a:water_blast ^ ^1 ^5.2
particle a:water_blast ^ ^1 ^5.4
particle a:water_blast ^ ^1 ^5.6
particle a:water_blast ^ ^1 ^5.8
particle a:water_blast ^ ^1 ^6
particle a:water_blast ^ ^1 ^6.2
particle a:water_blast ^ ^1 ^6.4
particle a:water_blast ^ ^1 ^6.6
particle a:water_blast ^ ^1 ^6.8
particle a:water_blast ^ ^1 ^7
particle a:water_blast_pop ^ ^1 ^7
execute @s ^^ ^1 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^1 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^1 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^2 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^2 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^2 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^3 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^3 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^3 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^4 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^4 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^4 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^5 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^5 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^5 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^6 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^^ ^6 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s ^ ^ ^6 execute @e[r=2,tag=!selfshove] ~~~ tp @s ^ ^ ^-0.5 facing @p[tag=selfshove]
execute @s[scores={level=0..5}] ^ ^ ^7 damage @e[r=2] 4 none
execute @s[scores={level=6..10}] ^ ^ ^7 damage @e[r=2] 8 none
execute @s[scores={level=11..99}] ^ ^ ^7 damage @e[r=2] 10 none
execute @s[scores={level=100..}] ^ ^ ^7 damage @e[r=2] 16 none
execute @s[tag=full_moon] ^ ^ ^7 damage @e[r=2] 18 none
tag @s remove self shove
scoreboard players set @s detect_left 0
tellraw @s[tag=!chatmsgoff] {"rawtext":[{"text":"You used "},{"text":"§bTorrent"}]}
scoreboard players set @s detect_left 0
