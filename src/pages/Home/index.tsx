import { type ReactElement } from "react";
import { motion } from "framer-motion";
import './style.css';

const HomePage = (): ReactElement => {
    return(
        <div className="home-page">
            <motion.div 
                className="logo-container"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: 1
                }}
                transition={{
                    scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    opacity: {
                        duration: 1,
                        ease: "easeOut"
                    }
                }}
            >
                <motion.div 
                    className="logo-text"
                    animate={{
                        textShadow: [
                            "0 0 20px rgba(117, 161, 228, 0.5)",
                            "0 0 40px rgba(117, 161, 228, 0.8)",
                            "0 0 20px rgba(117, 161, 228, 0.5)"
                        ]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    Xraystand
                </motion.div>
                
                <motion.div 
                    className="logo-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                        opacity: 1, 
                        y: 0,
                        scale: [1, 1.02, 1]
                    }}
                    transition={{
                        opacity: { delay: 0.5, duration: 1 },
                        y: { delay: 0.5, duration: 1 },
                        scale: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }
                    }}
                >
                    Интерактивные стенды
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HomePage;
