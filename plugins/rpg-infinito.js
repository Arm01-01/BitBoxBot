let { MessageType } = (await import(global.baileys)).default
let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*LISTO*`, m)
        global.db.data.users[m.sender].money = Infinity
        global.db.data.users[m.sender].limit = Infinity
        global.db.data.users[m.sender].level = Infinity
        global.db.data.users[m.sender].tok = Infinity
        global.db.data.users[m.sender].gold = Infinity
        global.db.data.users[m.sender].joincount = Infinity
        global.db.data.users[m.sender].exp = Infinity
        global.db.data.users[m.sender].emerald = Infinity
        global.db.data.users[m.sender].iron = Infinity
        
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^(ilimitado|infiniy)$/i
handler.rowner = true

export default handler
