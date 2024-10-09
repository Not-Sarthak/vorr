
## A new way to earn on from your website, without ads

``` TLDR; Vorr helps website owners earn money without ads by using visitors' spare computing power to mine ORE tokens on the Solana blockchain. ```


## Why not just mine ORE?

Great question! Mining ORE independently is sufficiently easy. But it is not profitable. Last time I checked, it would take me 40 years to mine 1 ORE on the web by myself. For those of us who don't plan to live as long as *Rose* (no offense *Jack*), we need a better solution. 

ORE mining pools are a great solution. Higher compute pooled together mines ORE at a higher rate, which means better rewards for everybody participating in the pool. 

Vorr gives you just that, a mining pool of your own. That can pool visitors' compute and mine ORE on your server. 

## How do I start?

It's simple!
1. Sign up for a self-custodial account at [Vorr](minevorr.xyz). This makes sure that Vorr does not have any direct access to your funds.

2. Find our code snippet and paste the script in your website. This script makes the call to the mining function and runs the whole show.

3. Watch your ORE balance grow as visitors browse your site. A dashboard, accessible from web and mobile shows you all data that you need to know. You can also stake your mined ORE from the dashboard itself to increase your winning multiplier. 

Hey! Did you know you can also off-ramp this money easily into your fiat accounts from the Vorr dashboard itself? Shoutout to [Mercuryo](https://mercuryo.io/on-off-ramps/) for helping us do this seamlessly!

## Non-TLDR

While the solution seems fairly simple, Vorr has a complex architecture. It includes running [DrillX](https://crates.io/crates/drillx) algorithm, co-ordinating nonces between visitors and time cut-offs from a central server. It has plenty parts intertwined making sure the product runs beautifully. 

There's a twist.

Our mining script written in rust used the concept of multithreading. WASM, however, doesn't support multithreading yet. So, we're set a step back on connecting the steps. 

We're working on making the application run on a single thread, this would allow the WASM file to run as expected. If you're someone who has any other solutions for this hiccup, we'd love to chat with you! You can [DM](https://twitter.com/mine_vorr) us.    

## You may skip this (+1000 aura if you do)

Vorr is available under the [MIT License](LICENSE).

Need help or have questions? Email me at farhat.kadiwala03@gmail.com

Live links: [X](https://twitter.com/mine_vorr) | [Website](https://minevorr.xyz)
