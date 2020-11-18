events.listen('item.tags', function (event) {
    var items = [
        'aquaculture:neptunium_pickaxe',
        'botania:elementium_pickaxe',
        'botania:glass_pickaxe',
        'botania:manasteel_pick',
        'botania:terra_pick',
        'byg:pendorite_pickaxe',
        'good_nights_sleep:candy_pickaxe',
        'good_nights_sleep:necrum_pickaxe',
        'good_nights_sleep:negatite_pickaxe',
        'good_nights_sleep:positite_pickaxe',
        'good_nights_sleep:rainbow_pickaxe',
        'good_nights_sleep:zitrite_pickaxe',
        'immersiveengineering:pickaxe_steel',
        'mekanismtools:bronze_pickaxe',
        'mekanismtools:lapis_lazuli_pickaxe',
        'mekanismtools:osmium_pickaxe',
        'mekanismtools:refined_glowstone_pickaxe',
        'mekanismtools:refined_obsidian_pickaxe',
        'mekanismtools:steel_pickaxe',
        'minecraft:diamond_pickaxe',
        'minecraft:golden_pickaxe',
        'minecraft:iron_pickaxe',
        'minecraft:netherite_pickaxe',
        'minecraft:stone_pickaxe',
        'minecraft:wooden_pickaxe',
		'mythicbotany:alfsteel_pick',
        'naturesaura:infused_iron_pickaxe',
        'naturesaura:sky_pickaxe',
        'vanillahammers:bone_hammer',
        'vanillahammers:coal_hammer',
        'vanillahammers:diamond_hammer',
        'vanillahammers:emerald_hammer',
        'vanillahammers:ender_hammer',
        'vanillahammers:fiery_hammer',
        'vanillahammers:glowstone_hammer',
        'vanillahammers:gold_hammer',
        'vanillahammers:iron_hammer',
        'vanillahammers:lapis_hammer',
        'vanillahammers:nether_hammer',
        'vanillahammers:netherite_hammer',
        'vanillahammers:obsidian_hammer',
        'vanillahammers:paper_hammer',
        'vanillahammers:prismarine_hammer',
        'vanillahammers:quartz_hammer',
        'vanillahammers:redstone_hammer',
        'vanillahammers:slime_hammer',
        'vanillahammers:stone_hammer',
        'vanillahammers:wood_hammer'
    ];
	event.get('forge:tools').add(items);
	event.get('forge:tools/pickaxe').add(items);
});
