#bridge-file-version: 81
HIDE
tag @s add water_manip
execute @s ~ ~ ~ summon armor_stand manip ^ ^ ^-2
effect @e[name=manip] invisibility 9999 1
execute @s ~ ~ ~ tp @e[type=armor_stand,name=manip,c=1] ^ ^ ^1.5
execute @s tp @e[name=manip,em=15] ~ ~-300 ~
execute @e[name=manip] ~ ~ ~ tp ~ ~ ~ facing @s
execute @e[name=manip] ~ ~ ~ to ^ ^ ^-.5 facing @s
execute @e[name=manip] ~ ~ ~ damage @e[type=!armor_stand,tag=!water_manip,r=2] 3 drowning entity @s
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^1.3 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^1.5 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^1.8 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^-.2 ^1.5
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^.2 ^1.5 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^0.5 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^1 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^1.3 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^1.5 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^1.8 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^-.2 ^1.5
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^.2 ^1.5 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^0.5 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^1 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^1.3 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^1.5 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^1.8 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^-.2 ^1.5
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^.2 ^1.5 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^0.5 ^
execute @e[name=manip] ~ ~ ~ particle minecraft:water_splash_particle ^ ^1 ^
tag @s remove water_manip
playsound block.water.ambient @a[r=4]
