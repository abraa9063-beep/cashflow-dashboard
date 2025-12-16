// ============================================
// 🔥 CONFIGURAÇÃO DO FIREBASE - ARQUIVO 1
// ============================================

// 1️⃣ CONFIGURAÇÃO DO SEU PROJETO
// ⚠️ VOCÊ VAI PEGAR ESSES DADOS NO FIREBASE CONSOLE
const firebaseConfig = {
    apiKey: "AIzaSyABC123DEF456ghi789jkl",
    authDomain: "meu-cashflow.firebaseapp.com",
    projectId: "meu-cashflow",
    storageBucket: "meu-cashflow.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123def456ghi789"
};

// 2️⃣ INICIALIZAR O FIREBASE
// Isso "liga" o Firebase no seu app
firebase.initializeApp(firebaseConfig);

// 3️⃣ PEGAR AS "FERRAMENTAS" QUE VAMOS USAR
const db = firebase.firestore();      // Banco de dados
const auth = firebase.auth();         // Sistema de login
const storage = firebase.storage();   // Para arquivos (opcional)

// 4️⃣ DEIXAR DISPONÍVEL EM TODO O APP
// Isso permite usar em qualquer arquivo JavaScript
window.firebaseApp = firebase;  // O Firebase completo
window.db = db;                 // Para salvar dados
window.auth = auth;             // Para fazer login/logout
window.storage = storage;       // Para upload de arquivos

// 5️⃣ MENSAGEM NO CONSOLE (apenas para debug)
console.log("✅ Firebase conectado com sucesso!");
console.log("📊 Banco de dados: Pronto");
console.log("🔐 Autenticação: Pronta");

// 6️⃣ FUNÇÃO PARA TESTAR CONEXÃO (opcional)
async function testFirebaseConnection() {
    try {
        // Tenta criar um documento de teste
        await db.collection('test').doc('connection').set({
            test: true,
            timestamp: new Date().toISOString()
        });
        console.log("✅ Conexão com Firestore: OK");
        return true;
    } catch (error) {
        console.error("❌ Erro na conexão:", error);
        return false;
    }
}

// 7️⃣ EXPORTAR (para usar em outros arquivos se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { firebaseConfig, db, auth, storage };
}