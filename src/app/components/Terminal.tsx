'use client';
import React, { useState, useRef, useEffect } from 'react';
import AnimatedLine from './AnimatedTerminalLine';

interface FileSystem {
  [key: string]: {
    type: 'directory' | 'file';
    children?: FileSystem;
    content?: string;
  };
}

const fileSystem: FileSystem = {
  home: {
    type: 'directory',
    children: {
      projects: {
        type: 'directory',
        children: {
          project1: { type: 'file', content: 'Description of project 1' },
          project2: { type: 'file', content: 'Description of project 2' },
        },
      },
      skills: { type: 'file', content: 'JavaScript, TypeScript, React, Next.js, GraphQL, Node.js' },
    },
  },
};

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string[]>([]);
  const [currentPath, setCurrentPath] = useState<string[]>(['home']);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const getCurrentDirectory = (path: string[]): FileSystem | string | undefined => {
    return path.reduce((dir, subPath) => {
      if (typeof dir === 'string' || dir === undefined) {
        return dir;
      }
      return dir[subPath]?.children ?? dir[subPath]?.content;
    }, fileSystem as FileSystem | string | undefined);
  };

  const handleCommand = (command: string) => {
    let newOutput = [...output];
    newOutput.push(`$ ${command}`);
    const args = command.split(' ');
    const cmd = args[0];
    const arg = args[1];

    switch (cmd.toLowerCase()) {
      case 'cd':
        handleCdCommand(arg, newOutput);
        break;
      case 'ls':
        handleLsCommand(newOutput);
        break;
      case 'cat':
        handleCatCommand(arg, newOutput);
        break;
      case 'skills':
        handleSkillsCommand(newOutput);
        break;
      case 'clear':
        newOutput = [];
        break;
      default:
        newOutput.push(`Command not found: ${command}`);
    }
    setOutput(newOutput);
    setHistory([...history, command]);
    setHistoryIndex(history.length);
  };

  const handleCdCommand = (arg: string, newOutput: string[]) => {
    if (arg === '..') {
      if (currentPath.length > 1) {
        setCurrentPath(currentPath.slice(0, -1));
      }
    } else if (arg && getCurrentDirectory([...currentPath, arg]) !== undefined) {
      setCurrentPath([...currentPath, arg]);
    } else {
      newOutput.push(`cd: no such file or directory: ${arg}`);
    }
  };

  const handleLsCommand = (newOutput: string[]) => {
    const dir = getCurrentDirectory(currentPath);
    if (typeof dir === 'string') {
      newOutput.push('Not a directory');
    } else if (dir !== undefined) {
      newOutput.push(Object.keys(dir).join('  '));
    } else {
      newOutput.push('Directory not found');
    }
  };

  const handleCatCommand = (arg: string, newOutput: string[]) => {
    const fileContent = getCurrentDirectory([...currentPath, arg]);
    if (typeof fileContent === 'string') {
      newOutput.push(fileContent);
    } else {
      newOutput.push(`cat: ${arg}: No such file or directory`);
    }
  };

  const handleSkillsCommand = (newOutput: string[]) => {
    newOutput.push('Here are my skills...');
    newOutput.push('JavaScript, TypeScript, React, Next.js, GraphQL, Node.js');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setInput(history[historyIndex - 1]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < history.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setInput(history[historyIndex + 1]);
      } else {
        setHistoryIndex(history.length);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [output]);

  return (
    <section id="terminal" className="p-4">
      <div className="terminal-container">
        <div className="terminal-content">
          <div className="terminal-output">
            {output.map((line, index) => (
              <AnimatedLine key={index} line={line} />
            ))}
          </div>
          <form onSubmit={handleSubmit} className="terminal-form">
            <span className="terminal-prompt">{currentPath.join('/')}$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              autoFocus
            />
          </form>
        </div>
      </div>
    </section>
  );
};


export default Terminal;
