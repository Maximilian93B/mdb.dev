'use client';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import AnimatedLineProps from './AnimatedTerminalLine';


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
          if (arg === '..') {
            if (currentPath.length > 1) {
              setCurrentPath(currentPath.slice(0, -1));
            }
          } else if (arg && getCurrentDirectory([...currentPath, arg]) !== undefined) {
            setCurrentPath([...currentPath, arg]);
          } else {
            newOutput.push(`cd: no such file or directory: ${arg}`);
          }
          break;
        case 'ls':
          const dir = getCurrentDirectory(currentPath);
          if (typeof dir === 'string') {
            newOutput.push('Not a directory');
          } else if (dir !== undefined) {
            newOutput.push(Object.keys(dir).join('  '));
          } else {
            newOutput.push('Directory not found');
          }
          break;
        case 'cat':
          const fileContent = getCurrentDirectory([...currentPath, arg]);
          if (typeof fileContent === 'string') {
            newOutput.push(fileContent);
          } else {
            newOutput.push(`cat: ${arg}: No such file or directory`);
          }
          break;
        case 'skills':
          newOutput.push('Here are my skills...');
          newOutput.push('JavaScript, TypeScript, React, Next.js, GraphQL, Node.js');
          break;
        case 'clear':
          newOutput = [];
          break;
        default:
          newOutput.push(`Command not found: ${command}`);
      }
      setOutput(newOutput);
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleCommand(input);
      setInput('');
    };
  
    return (
      <section id="terminal" className="p-4">
        <div className="bg-black text-green-500 p-4 rounded-md font-mono max-w-3xl mx-auto">
          <div className="mb-4">
            {output.map((line, index) => (
              < AnimatedLineProps key={index} line={line} />
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="mr-2">{currentPath.join('/')}$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none text-green-500 w-full"
              autoFocus
            />
          </form>
        </div>
      </section>
    );
  };
  
  export default Terminal;